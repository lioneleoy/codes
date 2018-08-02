#Reading XML file to get the member values
#!/usr/bin/python
import xml.etree.cElementTree as ET
def xmlRead():
    tree=ET.ElementTree(file='./input.xml')
    root=tree.getroot()
    for child in root:
            if(child.tag=='MemberRule'):
                print child.tag
                for subchild in child:
                    if(subchild.tag!='Or'):
                        if(subchild.tag=='AttributeExpression'):
                            print "MEMBERS:",subchild.attrib['value']
            else:
                print child.tag
                for subchild in child:
                    if(subchild.tag!='Or'):
                        if(subchild.tag=='AttributeExpression'):
                            print "ACCOUNT:",subchild.attrib['value']


def main():
    a=xmlRead()

if __name__=="__main__":main()
