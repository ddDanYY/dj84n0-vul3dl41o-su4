bl_info = {
    "name": "Build Render Node",
    "author": "Dannnn",
    "version": (1, 0),
    "blender": (3, 30, 0),
    "location": "View Layer Properties",
    "description": "Build Render Node in Compositing",
    "warning": "",
    "doc_url": "",
    "category": "Node",
}

import bpy

def Fmat(fomat):
    import random
    if fomat == "Png":
        png = True
        fomatname = "PNG"
    if fomat == "Exr":
        png = False
        fomatname = "OPEN_EXR_MULTILAYER"

    # 建立組合節點樹
    bpy.context.scene.use_nodes = True
    tree = bpy.context.scene.node_tree
    links = tree.links

    # 清除現有節點
    for node in tree.nodes:
        tree.nodes.remove(node)

    # 建立渲染圖層節點
    RenLay_node = tree.nodes.new('CompositorNodeRLayers')
    RenLay_node.location = (-200, 0)

    # 建立檔案輸出節點
    FileOput_node = tree.nodes.new('CompositorNodeOutputFile')
    FileOput_node.location = (900, 0)
    FileOput_node.format.file_format = fomatname

    # 獲取Render Layers節點的輸出列表
    enabled_outputs = [output.name for output in RenLay_node.outputs if output.enabled]


    # 創建與輸出名稱相匹配的輸入槽
    Excluded_layer = ["Alpha", "Noisy Image", "Denoising Normal" , "Denoising Albedo" , "Denoising Depth"]
    RenLay_node_Zd_exists = False
    RenLay_node_Denoise_exists = False
    RenLay_node_IndexOB = False
    RenLay_node_IndexMA = False

    for name in enabled_outputs:
        if name =="IndexOB":
            RenLay_node_IndexOB = True
        if name =="IndexMA":
            RenLay_node_IndexMA = True
        if name == "Depth":
            RenLay_node_Zd_exists = True
        if name == "Denoising Normal":
            RenLay_node_Denoise_exists = True
        if png and "Crypto" in name:
            continue
        if name not in Excluded_layer:
            if name not in FileOput_node.inputs:
                # 如果在File Output節點中不存在同名的輸入槽，則創建新的輸入槽
                input_node = FileOput_node.file_slots.new(name)
                # 將Render Layers的輸出連接到File Output節點的輸入槽
                link = links.new(RenLay_node.outputs[name], input_node)
            else:
                # 如果存在同名的輸入槽，則直接將Render Layers的輸出連接到File Output節點的輸入槽
                existing_input = FileOput_node.inputs[name]
                link = links.new(RenLay_node.outputs[name], existing_input)

    if RenLay_node_IndexMA:
        # 遍歷場景中的所有物件
        for obj in bpy.context.scene.objects:
            # 確保物件是可渲染的
            if obj.type == 'MESH' and obj.visible_get():
                # 遍歷物件的所有材質
                for material_slot in obj.material_slots:
                    material = material_slot.material
                    # 確保材質存在並具有Pass Index屬性
                    if material and hasattr(material, 'pass_index'):
                        # 生成大於0的隨機整數
                        pass_index = random.randint(1, 9999)
                        # 將Pass Index設定為隨機整數
                        material.pass_index = pass_index
        Normalize_node = tree.nodes.new('CompositorNodeNormalize')
        Normalize_node.location = (140, -170)
        links.new(RenLay_node.outputs['IndexMA'], Normalize_node.inputs[0])
        ColorRamp_node = tree.nodes.new('CompositorNodeValToRGB')
        ColorRamp_node.location = (360, -230)
        links.new(Normalize_node.outputs[0], ColorRamp_node.inputs[0])
        links.new(ColorRamp_node.outputs[0], FileOput_node.inputs['IndexMA'])
        ColorRamp_node.color_ramp.elements.new(0.25)
        ColorRamp_node.color_ramp.elements.new(0.5)
        ColorRamp_node.color_ramp.elements.new(0.75)
        ColorRamp_node.color_ramp.elements[0].color = (1,0,0,1)
        ColorRamp_node.color_ramp.elements[1].color = (1,0,1,1)
        ColorRamp_node.color_ramp.elements[2].color = (0,1,0,1)
        ColorRamp_node.color_ramp.elements[3].color = (1,1,0,1)
        ColorRamp_node.color_ramp.elements[4].color = (0,0,1,1) 

    if RenLay_node_IndexOB:
        # 遍歷場景中的所有物件
        for obj in bpy.context.scene.objects:
        # 確保物件是可渲染的
            if obj.type == 'MESH' and obj.visible_get():
                # 生成大於0的隨機整數
                pass_index = random.randint(1, 9999)
                # 將Pass Index設定為隨機整數
                obj.pass_index = pass_index

        Normalize_node = tree.nodes.new('CompositorNodeNormalize')
        Normalize_node.location = (140, -100)
        links.new(RenLay_node.outputs['IndexOB'], Normalize_node.inputs[0])
        ColorRamp_node = tree.nodes.new('CompositorNodeValToRGB')
        ColorRamp_node.location = (360, -120)
        links.new(Normalize_node.outputs[0], ColorRamp_node.inputs[0])
        links.new(ColorRamp_node.outputs[0], FileOput_node.inputs['IndexOB'])
        ColorRamp_node.color_ramp.elements.new(0.25)
        ColorRamp_node.color_ramp.elements.new(0.5)
        ColorRamp_node.color_ramp.elements.new(0.75)
        ColorRamp_node.color_ramp.elements[0].color = (0,1,0,1)
        ColorRamp_node.color_ramp.elements[1].color = (0,1,1,1)
        ColorRamp_node.color_ramp.elements[2].color = (1,0,0,1)
        ColorRamp_node.color_ramp.elements[3].color = (1,1,0,1)
        ColorRamp_node.color_ramp.elements[4].color = (0,0,1,1) 
    if RenLay_node_Zd_exists:
        Normalize_node = tree.nodes.new('CompositorNodeNormalize')
        Normalize_node.location = (140, 0)
        links.new(RenLay_node.outputs['Depth'], Normalize_node.inputs[0])

        ColorRamp_node = tree.nodes.new('CompositorNodeValToRGB')
        ColorRamp_node.location = (360, 110)
        links.new(Normalize_node.outputs[0], ColorRamp_node.inputs[0])
        ColorRamp_node.color_ramp.elements[0].color = (1,1,1,1)
        ColorRamp_node.color_ramp.elements[0].position = 0
        ColorRamp_node.color_ramp.elements[1].color = (0,0,0,1)
        ColorRamp_node.color_ramp.elements[1].position = 1

        MapRange_node = tree.nodes.new('CompositorNodeMapRange')
        MapRange_node.location = (660, 110)
        links.new(ColorRamp_node.outputs[0], MapRange_node.inputs[0])

    if RenLay_node_Denoise_exists:
        Denoise_node = tree.nodes.new('CompositorNodeDenoise')
        Denoise_node.location = (200, 280)
        links.new(RenLay_node.outputs["Image"], Denoise_node.inputs[0])

        Reroute1N_node = tree.nodes.new('NodeReroute')
        Reroute1N_node.location = (180, -1000)
        links.new(RenLay_node.outputs["Denoising Normal"], Reroute1N_node.inputs[0])
        Reroute2N_node = tree.nodes.new('NodeReroute')
        Reroute2N_node.location = (180, -1300)
        links.new(Reroute1N_node.outputs[0], Reroute2N_node.inputs[0])
        Reroute3N_node = tree.nodes.new('NodeReroute')
        Reroute3N_node.location = (-400, -1300)
        links.new(Reroute2N_node.outputs[0], Reroute3N_node.inputs[0])
        Reroute4N_node = tree.nodes.new('NodeReroute')
        Reroute4N_node.location = (-400, 120)
        links.new(Reroute3N_node.outputs[0], Reroute4N_node.inputs[0])
        links.new(Reroute4N_node.outputs[0], Denoise_node.inputs[1])

        Reroute1A_node = tree.nodes.new('NodeReroute')
        Reroute1A_node.location = (120, -1050)
        links.new(RenLay_node.outputs["Denoising Albedo"], Reroute1A_node.inputs[0])
        Reroute2A_node = tree.nodes.new('NodeReroute')
        Reroute2A_node.location = (120, -1250)
        links.new(Reroute1A_node.outputs[0], Reroute2A_node.inputs[0])
        Reroute3A_node = tree.nodes.new('NodeReroute')
        Reroute3A_node.location = (-340, -1250)
        links.new(Reroute2A_node.outputs[0], Reroute3A_node.inputs[0])
        Reroute4A_node = tree.nodes.new('NodeReroute')
        Reroute4A_node.location = (-340, 95)
        links.new(Reroute3A_node.outputs[0], Reroute4A_node.inputs[0])
        links.new(Reroute4A_node.outputs[0], Denoise_node.inputs[2])

        Reroute1I_node = tree.nodes.new('NodeReroute')
        Reroute1I_node.location = (800, 240)
        links.new(Denoise_node.outputs[0], Reroute1I_node.inputs[0])
        links.new(Reroute1I_node.outputs[0], FileOput_node.inputs['Image'])


def button_exr(context):
    Fmat("Exr")

class Add_ExrOutput(bpy.types.Operator):
    """Tooltip"""
    bl_idname = "object.simple_operator_exr"
    bl_label = "Exr"

    def execute(self, context):
        button_exr(context)
        return {'FINISHED'}
    
def button_png(context):
    Fmat("Png")

class Add_PngOutput(bpy.types.Operator):
    """Tooltip"""
    bl_idname = "object.simple_operator_png"
    bl_label = "Png"

    def execute(self, context):
        button_png(context)
        return {'FINISHED'}

# Register and add to the "object" menu (required to also use F3 search "Simple Object Operator" for quick access).


class LayoutDemoPanel(bpy.types.Panel):
    """Creates a Panel in the scene context of the properties editor"""
    bl_label = "Build Render Node"
    bl_idname = "SCENE_PT_layout"
    bl_space_type = 'PROPERTIES'
    bl_region_type = 'WINDOW'
    bl_context = "view_layer"

    def draw(self, context):
        layout = self.layout

        scene = context.scene

        # Big render button
        row = layout.row()
        
        row.scale_x = 1
        row.scale_y = 2
        row.operator("object.simple_operator_exr")
        
        row.scale_x = 1
        row.operator("object.simple_operator_png")



def register():
    bpy.utils.register_class(Add_ExrOutput)
    bpy.utils.register_class(Add_PngOutput)
    bpy.utils.register_class(LayoutDemoPanel)

def unregister():
    bpy.utils.unregister_class(Add_ExrOutput)
    bpy.utils.unregister_class(Add_PngOutput)
    bpy.utils.unregister_class(LayoutDemoPanel)

if __name__ == "__main__":
    register()
